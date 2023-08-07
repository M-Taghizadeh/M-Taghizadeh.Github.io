let isPersian = false;

function toggleLanguage() {
    isPersian = !isPersian;

    if (isPersian) {
    $("#toggle-button").text("Eng");
    } else {
    $("#toggle-button").text("Farsi");
    }
    translateSection("intro");
    translateSection("about-me");
}

function translateSection(sectionId) {
    const englishText = document.getElementById(sectionId).querySelector("p").innerText;
    const translatedText = isPersian ? translateEnglishToPersian(englishText) : translatePersianToEnglish(englishText);
    $("#" + sectionId + " p").text(translatedText);

    if (isPersian) {
        $("#" + sectionId + " p").addClass("p_text");
    } else {
        $("#" + sectionId + " p").removeClass("p_text");
    }
}



function translateEnglishToPersian(englishText) {
    if (englishText.startsWith("Programming experience")) {
        return "سابقه برنامه نویسی از سال 2017 با زبان های برنامه نویسی مختلف و البته علاقه مند به زبان برنامه نویسی پایتون، توسعه بک اند و هوش مصنوعی. من در حال حاضر دانشجوی کارشناسی ارشد رشته مهندسی نرم افزار در دانشگاه گیلان و در حال تکمیل تز و پایان نامه خود با موضوع <پیش بینی باورهای فکری مشترک در مکالمات افراد با استفاده از پردازش زبان طبیعی> هستم. این پایان نامه در زمینه هوش مصنوعی و علوم روانشناختی است. در این وبسایت با من و سابقه کاری و آکادمیک من آشنا میشوید.";
    }
    if (englishText.startsWith("My goal and intention")) {
        return "هدف من انتشار دانش برنامه نویسی و رشد کامیونیتی برنامه نویس های فارسی زبان است و در همین جهت، تا کنون به‌صورت مستقیم و غیر مستقیم به چند هزار دانشجو، برنامه نویسی آموزش دادم.تجربه‌ها و فیلدهای کاری: برنامه نویسی پایتون، هوش مصنوعی، یادگیری ماشین، دیپ لرنینگ، داده کاوی، پردازش موازی، بیگ دیتا، پردازش زبان طبیعی، توسعه بک‌اند با پایتون، معماری های نرم‌افزار، معماری تمیز، کد نویسی تمیز، الگوهای طراحی"
    }

    if (englishText.startsWith("Programming")) {
        return "تعداد دانشجویان برنامه نویسی"
    }
}

function translatePersianToEnglish(persianText) {
    if (persianText.startsWith("سابقه برنامه نویسی")) {
    return "Programming experience since 2017 with different programming languages ​​and of course interested in Python, back-end development and artificial intelligence. I am currently a master's student in software engineering at University of Guilan, and I am working on my thesis in the field of NLP and Cognitive Science.";
    }
    if (persianText.startsWith("هدف من انتشار دانش")) {
    return "My goal and intention is to broadcast the knowledge of programming for the growth of the community of Persian programmers, and in this regard, I have taught programming directly and indirectly to several thousand students. Experiences and work fields: Python programming, artificial intelligence, machine learning, deep learning, data mining, parallel processing, big data, natural language processing, backend development with Python, software architectures, clean architecture, clean coding, design patterns";
    }
}