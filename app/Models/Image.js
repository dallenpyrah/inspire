export default class Image{
    constructor(data){
        this.img = data.url
        this.id = data.id || data._id || "No ID"
    }

    get Template(){
        return /*html*/ `
        url('${this.img}')
        `
    }
}

//copyright: null
// id: 324
// large_url: "https://splashbase.s3.amazonaws.com/unsplash/tumblr_n4ef69szs71st5lhmo1_1280.jpg"
// site: null
// source_id: 220
// url: "https://splashbase.s3.amazonaws.com/unsplash/tumblr_n4ef69szs71st5lhmo1_1280.jpg"