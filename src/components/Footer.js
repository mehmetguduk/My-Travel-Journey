import footer_image from "../images/other-images/footer-image.png"

export default function Footer(){
    return(
        <footer className="footer">
           <img className="footer-image" src={footer_image}/>
           <p className="footer-quote">"Wherever you go becomes a part of you somehow"</p>
        </footer>
    )
} 