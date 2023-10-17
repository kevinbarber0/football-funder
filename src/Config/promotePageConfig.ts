import { PromoteImageTitlePropsType } from "types"
import FacebookImg from "Assets/images/promote/facebook-img.png";
import TwitterImg from "Assets/images/promote/twitter-img.png";
import InstagramImg from "Assets/images/promote/instargram-img.png";
import LinkedinImg from "Assets/images/promote/linkedin-img.png";
import EmailImg from "Assets/images/promote/Email-img.png"
export const PromoteTitleImageData: PromoteImageTitlePropsType[] = [
    {
        alignStyle:true,
        image:FacebookImg,
        heading:"Facebook",
        subheading:"Post, Stories",
        topIntroText:"Your fundraiser or listing will be featured on Football Funder’s official Facebook as its own post - and if your club or organisation is on there, we will partner with you on the post!",
        underIntroText:"We will also share content as a story, widening your reach even further."
    },
    {
        alignStyle:false,
        image:TwitterImg,
        heading:"Twitter",
        subheading:"Carousel post, Retweets",
        topIntroText:"This will be posted three times weekly for a four week period.",
        underIntroText:"We will also re-tweet your fundraiser or listing on the alternate days to our Twitter audience."
    },
    {
        alignStyle:true,
        image:InstagramImg,
        heading:"Instagram",
        subheading:"Tile & Reel, Stories",
        topIntroText:"Your fundraiser or listing will be featured on Football Funder’s official Instagram - and if your club or organisation is on there, we will partner with you on the post!",
        underIntroText:"We will also share content as a story, widening your reach even further."
    },
    {
        alignStyle:false,
        image:LinkedinImg,
        heading:"LinkedIn",
        subheading:"Weekly recap ",
        topIntroText:"Each week, we recap to the global audience and all of our followers on LinkedIn the latest fundraisers and listings. Your club or organisation will feature for two weeks."
    },
    {
        alignStyle:true,
        image:EmailImg,
        heading:"Email marketing",
        subheading:"Weekly email",
        topIntroText:"We send a weekly email to everyone subscribed to our mailing list with the latest campaigns. Your club or organisation will feature on the next send after payment has been made."
    }
]