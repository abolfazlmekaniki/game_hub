import noimage from '../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp'

const get_img_url = (url:string)=>{
if(!url) return noimage;
const target = 'media/';
const index = url.indexOf(target) + target.length;
return url.slice(0,index)+'crop/600/400/' + url.slice(index);

}

export default get_img_url