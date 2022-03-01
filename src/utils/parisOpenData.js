
class requestCache {
    static cache = {};

    static get(url) {
        return this.cache[url];
    }
    
    static set(url, data) {
        this.cache[url] = data;
    }
}

/**
 * Retourne les pistes cyclables de la ville de Paris sous format geoJSON.
 */
export async function getPistesCyclables() {
    const endpointURL = "https://opendata.paris.fr/api/records/1.0/download/?disjunctive.typologie_simple=true&dataset=reseau-cyclable&lang=fr&format=json&timezone=Europe%2FBerlin&fields=geo_shape,typologie_simple&geo_simplify=true"
        + "&rows=1500"
        + "&geo_simplify_zoom=11"
        + "&location=12,48.85432,2.34575"
        + "&geofilter.bbox=48.7711250173148,2.1869659423828125,48.951817388604084,2.5323486328125";
    console.log("a");
    let pistes = requestCache.get(endpointURL);
    if (!pistes) {
        const requete = await fetch (endpointURL);
        pistes = await requete.json();
        requestCache.set(endpointURL, pistes);
    }

    const retval = pistes.map(piste => {
        // les latlong données par l'API sont inversées.
        const positions = piste.fields.geo_shape.coordinates.map(points => {
            return [points[1], points[0]];
        });
        return {
            coordinates: positions,
            layer: piste.fields.typologie_simple,
            id: piste.recordid,
        }
    });
    return retval;
}