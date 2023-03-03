<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>4 Secure - IT Agency</title>
    <!-- Stylesheets -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
<?php include('../includes/header-scripts.php'); ?>
</head>
<body>
    <div class="page-wrapper">
        <!-- Preloader -->
        <div class="preloader">
            <div class="icon"></div>
        </div>
       <?php include('../includes/header.php'); ?>
        <?php include('../includes/mobile-menu.php'); ?>
        <!--Search Popup-->
        <div class="search-popup">
            <div class="search-popup__overlay custom-cursor__overlay">
                <div class="cursor"></div>
                <div class="cursor-follower"></div>
            </div><!-- /.search-popup__overlay -->
            <div class="search-popup__inner">
                <form action="#" class="search-popup__form">
                    <input type="text" name="search" placeholder="Type here to Search....">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div><!-- /.search-popup__inner -->
        </div><!-- /.search-popup -->
        <!-- Banner Section -->
        <section class="page-banner">
            <div class="image-layer" style="background-image:url(/assets/images/background/image-7.jpg);"></div>
            <div class="shape-1"></div>
            <div class="shape-2"></div>
            <div class="banner-inner">
                <div class="auto-container">
                    <div class="inner-container clearfix">
                        <h1>Cyber Security</h1>
                        <div class="page-nav">
                            <ul class="bread-crumb clearfix">
                                <li><a href="index-main.html">Home</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li class="active">App Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Banner Section -->
        <div class="sidebar-page-container">
            <div class="auto-container">
                <div class="row clearfix">
                    <!--Content Side-->
                    <div class="content-side col-lg-8 col-md-12 col-sm-12">
                        <div class="service-details">
                            <div class="main-image image">
                                <img src="/assets/images/resource/featured-image-16.jpg" alt="">
                            </div>
                            <div class="text-content">
                                <h3>App Development</h3>
                                <p>Need something changed or is there something not quite working the way you envisaged?
                                    Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy
                                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged.</p>
                                <div class="featured">
                                    <div class="row clearfix">
                                        <div class="image-col col-md-6 col-sm-12">
                                            <div class="image">
                                                <img src="/assets/images/resource/featured-image-17.jpg" alt="">
                                            </div>
                                        </div>
                                        <div class="text-col col-md-6 col-sm-12">
                                            <div class="inner">
                                                <h4>planning & strategy</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.</p>
                                                <ul>
                                                    <li>Research beyond the business plan</li>
                                                    <li>Marketing options and rates</li>
                                                    <li>The ability to turnaround consulting</li>
                                                    <li>Customer engagement matters</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>Need something changed or is there something not quite working the way you envisaged?
                                    Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy
                                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged.</p>
                                <p class="last">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                    <?php include('../includes/inner-sidebar-services.php'); ?>
                </div>
            </div>
        </div>
        <!-- Call To Section -->
        <section class="call-to-section-two alternate">
            <div class="auto-container">
                <div class="inner clearfix">
                    <h2>We’re Ready to Bring Bigger <br>& Stronger Projects</h2>
                    <div class="link-box">
                        <a class="theme-btn btn-style-two" href="about.html">
                            <i class="btn-curve"></i>
                            <span class="btn-title">Contact with us</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <?php include('../includes/footer.php'); ?>
    </div>
    <!--End pagewrapper-->
    <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>
<?php include('../includes/footer-scripts.php'); ?>
</body>
</html>