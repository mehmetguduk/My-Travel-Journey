/*
  THIS FILE WAS DEVELOPED BY MEHMET GUDUK
  © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
  https://github.com/mehmetguduk
*/

import footer_image from "../images/other-images/footer-image.png"

export default function Footer() {
    return (
        <footer className="footer">
            <img className="footer-image" src={footer_image} alt="Mehmet Güdük watches out the window while traveling by train." />
            <p className="footer-quote">"Travel has a way of stretching the mind."</p>
            <p class="footer-copyright">
                © 2022 Copyright <a class="copyright-link" href="https://github.com/mehmetguduk" target="_blank" rel="noreferrer">Mehmet Güdük</a> All Rights Reserved
            </p>
        </footer>
    )
} 