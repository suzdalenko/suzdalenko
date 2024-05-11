function blogFunctions(){
    let listBlogEntries = document.getElementById('listBlogEntries');
    let htmlContent = '';
    repository.forEach(item => {
        htmlContent += `<div class="col-md-6 col-lg-3 d-flex">
                            <div class="blog-entry justify-content-end">
                                <a onclick="route(event)" href="`+item.slug+`" class="block-20 img d-flex align-items-end" 
                                    style="background-image: url('`+item.image+`');"></a>
                                <div class="text">
                                    <p class="meta"><span>Jan. 07, 2021</span><a onclick="route(event)" href="`+item.slug+`">0 Comentarios</a></p>
                                    <h3 class="heading mb-3"><a onclick="route(event)" href="`+item.slug+`">`+item.title+`</a></h3>
                                    <p>`+item.small+`</p>
                                </div>
                            </div>
                        </div>`;
        listBlogEntries.innerHTML = htmlContent;
    });
}


/*

            <div class="col-md-6 col-lg-3 d-flex">
                <div class="blog-entry justify-content-end" data-aos="fade-up" data-aos-duration="1000"
                    data-aos-delay="100">
                    <a href="blog-single.html" class="block-20 img d-flex align-items-end"
                        style="background-image: url('images/image_1.jpg');">
                    </a>
                    <div class="text">
                        <p class="meta"><span>Admin</span> <span>Jan. 07, 2021</span><a href="#">3 Comments</a></p>
                        <h3 class="heading mb-3"><a href="#">The Newest and Updated Bootstrap 5 is Here</a></h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex">
                <div class="blog-entry justify-content-end" data-aos="fade-up" data-aos-duration="1000"
                    data-aos-delay="200">
                    <a href="blog-single.html" class="block-20 img d-flex align-items-end"
                        style="background-image: url('images/image_2.jpg');">
                    </a>
                    <div class="text">
                        <p class="meta"><span>Admin</span> <span>Jan. 07, 2021</span><a href="#">3 Comments</a></p>
                        <h3 class="heading mb-3"><a href="#">The Newest and Updated Bootstrap 5 is Here</a></h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                    </div>
                </div>
            </div>
*/