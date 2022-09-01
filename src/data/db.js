import { MdOutlineVerifiedUser } from "react-icons/md";
import { GoLink } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BiNews, BiPhotoAlbum } from "react-icons/bi";
import { IoIosColorFilter } from "react-icons/io";
import imgOne from "./../assets/gallery-1st-img.jpg";
import imgTwo from "./../assets/gallery-2nd-img.png";
import imgThree from "./../assets/gallery-3rd-img.png";
import imgFour from "./../assets/gallery-4th-image.jpg";




const shield1 = [{
    icon: MdOutlineVerifiedUser,
    title: "Guaranty and Trust",
    content: "At KOLOZ, we believe fundamental honesty is the keystone of business. We help Brands craft their identity, feel the moment and also create visually appealing artworks that conveys the right information."
},
{
    icon: GoLink,
    title: "Creativity and Innovation",
    content: "We are on a mission to bring your creative, innovative and business ideas to life, to help you scale your businesses; increase your sales, giving you optimum satisfaction as we provide our premium services."
},
{
    icon: FaRegHandshake,
    title: "Customer Satisfaction",
    content: "We aim to boost relevance for businesses, brands and innovators, both locally and internationally, and to provide a medium for creatives and innovators to learn and earn while pursuing their passion."
},
]

const services = [{
    icon: IoColorPaletteOutline,
    title: "Illustrator and Digital Art",
    link: 'digitalArt',
    content: "Expresses an idea or concept using images. Koloz helps you create artworks that are visually appealing. Arts like NFTs, 3Ds, and 2Ds images and more."
},
{
    icon: IoIosColorFilter,
    title: "Product Design",
    link: 'productDesign',
    content: "Koloz can create engaging and irresistible product designs which are easy to understand and navigate. This will help you achieve your set goals and to reach your target audience."
},
{
    icon: IoIosColorFilter,
    title: "Graphics Design",
    link: 'graphicsDesign',
    content: "Being the bedrock of the Koloz project, We create unique digital designs for brands, giving them an edge over their competitors with outstanding and compelling designs."
},
{
    icon: BiPhotoAlbum,
    title: "Photography",
    link: 'photography',
    content: " Memory in a frame. Koloz helps you capture unforgettable moments. We provide photo shoots at both studio and memorable locations, wedding shoots and sundry."
},
{
    icon: BiNews,
    title: "Content Writing",
    link: 'contentWriting',
    content: "Our content writers package will help give your page a new feel, making it visually appealing and engaging which is key to customers trust and loyalty."
}
]

const gallery = [
    {src: imgOne,
     h1: "Company's Name", 
     h2: 'ILLUSTRATION AND DIGITAL ART'
    },
    {src: imgTwo,
     h1: "Company's Name", 
     h2: 'SOCIAL MEDIA DESIGN'
    },
    {src: imgThree,
     h1: "Company's Name", 
     h2: 'ILLUSTRATION AND DIGITAL ART'
    },
    {src: imgFour,
     h1: "Company's Name", 
     h2: 'PHOTOGRAPHY'
    }
]

export default shield1;

export { services, gallery }