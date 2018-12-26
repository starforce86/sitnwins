import React from 'react';
import './footer.css'

export default class FooterPanel extends React.Component {
    render () {
        return (
            <footer class="footer">
                <div class="container bottom_border">
                    <div class="row">
                        <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Contact us</h5>
                            {/*<!--headin5_amrc-->*/}
                            <p class="mb10">Sitnwins is simply sports betting industry. Since 2019</p>
                            <p><i class="fa fa-location-arrow"></i> Bochum,+Germany/@51.4708864,7.1553467,12z </p>
                            <p><i class="fa fa-phone"></i>  +4917661181191  </p>
                            <p><i class="fa fa fa-envelope"></i> serkan@sitnwins.com  </p>


                        </div>


                        <div class=" col-sm-4 col-md  col-6 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Responsible Gaming</h5>
                            {/*<!--headin5_amrc-->*/}
                            <ul class="footer_ul_amrc">
                            <li><a href="http://sitnwins.com">User Agreement</a></li>
                            <li><a href="http://sitnwins.com">Responsible Gaming</a></li>
                            <li><a href="http://sitnwins.com">Security & Privacy</a></li>
                            <li><a href="http://sitnwins.com">Cashout Policy</a></li>
                            <li><a href="http://sitnwins.com">Banking</a></li>
                            <li><a href="http://sitnwins.com">Verify Now</a></li>
                            </ul>
                            {/*<!--footer_ul_amrc ends here-->*/}
                        </div>

                        <div class=" col-sm-4 col-md  col-6 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Sport Info</h5>
                            {/*<!--headin5_amrc-->*/}
                            <ul class="footer_ul_amrc">
                            <li><a href="http://sitnwins.com">Welcome Package Details</a></li>
                            <li><a href="http://sitnwins.com">Bonus Policy</a></li>
                            <li><a href="http://sitnwins.com">Betting Rules</a></li>
                            <li><a href="http://sitnwins.com">Sitemap</a></li>
                            </ul>
                            {/*<!--footer_ul_amrc ends here-->*/}
                        </div>


                        <div class=" col-sm-4 col-md  col-6 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Supporters</h5>
                            {/*<!--headin5_amrc-->*/}
                            <ul class="footer_ul_amrc">
                            <li><a href="http://sitnwins.com">FC Bayern Munich</a></li>
                            <li><a href="http://sitnwins.com">FC Schalke 04</a></li>
                            <li><a href="http://sitnwins.com">Borsia Dortmund</a></li>
                            <li><a href="http://sitnwins.com">Hamburger SV</a></li>
                            <li><a href="http://sitnwins.com">Benz</a></li>
                            <li><a href="http://sitnwins.com">SIMENS</a></li>
                            <li><a href="http://sitnwins.com">Developers</a></li>
                            </ul>
                            {/*--footer_ul_amrc ends here*/}
                        </div>


                        <div class=" col-sm-4 col-md  col-12 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
                            {/*<!--headin5_amrc ends here-->*/}

                            <ul class="footer_ul2_amrc">
                            <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Jason Watt CEO & Founder<a href="#">https://www.sitnwins.com/</a></p></li>
                            <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Jason Watt CTO & Co-founder<a href="#">https://www.sitnwins.com/</a></p></li>
                            <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Jason Watt Developer<a href="#">https://www.sitnwins.com/</a></p></li>
                            </ul>
                            {/*<!--footer_ul2_amrc ends here-->*/}
                        </div>
                    </div>
                </div>


                <div class="container">
                <ul class="foote_bottom_ul_amrc">
                <li><a href="http://sitnwins.com">Home</a></li>
                <li><a href="http://sitnwins.com">About</a></li>
                <li><a href="http://sitnwins.com">Services</a></li>
                <li><a href="http://sitnwins.com">Pricing</a></li>
                <li><a href="http://sitnwins.com">Blog</a></li>
                <li><a href="http://sitnwins.com">Contact</a></li>
                </ul>
                {/*}--foote_bottom_ul_amrc ends here--*/}
                <p class="text-center">Copyright @2018 | Designed With by <a href="#">SitnWins</a></p>

                <ul class="social_footer_ul">
                <li><a href="http://sitnwins.com"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="http://sitnwins.com"><i class="fab fa-twitter"></i></a></li>
                <li><a href="http://sitnwins.com"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="http://sitnwins.com"><i class="fab fa-instagram"></i></a></li>
                </ul>
                {/*--social_footer_ul ends here*/}
                </div>

            </footer>
        );
    }
}