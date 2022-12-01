
var teamjson = [
    {
        name: "Ashish Gupta",
        img: "images/team/ashish.png",
        position: "Co-founder &amp; CEO",
        description: "Ashish has over 8 years of experience in digital implementation, team management, project delivery and inside sales. For the founded company Ashish built a good network of clients, generated revenue and provided all financial support.."
    },
    {
        name: "Bishnu Sahoo",
        img: "images/team/bishnu.png",
        position: "Co-founder &amp; CTO.",
        description: "Bishnu has focused on the technical deliveries of the product Fretbox. He designed the working frameworks, and managed the technical team."
    },
    {
        name: "Sachin Mandwariya",
        img: "images/team/sachin.png",
        position: "Co-founder &amp; Chief - Digital Marketing.",
        description: "Sachin has extensive experience in Digital &amp; Social Media marketing. He did his Bachelor's in Multimedia &amp; Animation. For fretbox, he is always busy planning better graphics and Designs."
    },
    {
        name: "Abbas Ashoor",
        img: "images/team/abbas.png",
        position: "Chief relationship officer - Middle East Operations .",
        description: "Abbas, currently a custom officer in Bahrain, is local to country. Abbas has good political and business contacts in Bahrain &amp; Middle East market."
    },
    {
        name: "Sameer Dahotre",
        img: "images/team/samir.png",
        position: "Mentor &amp; Chief Investment Office.",
        description: "Samir Dahotre is strategist, having 15+ years of working experience with corporate like Infosys making sales in million figures. Currently Samir is CEO for Perspective stratup Incubator based in Mumbai, helping startup make their sales &amp; execution strategy and connection the preferred one to Investors."
    },
    {
        name: "Praveen Bhargava",
        img: "images/team/pravin.png",
        position: "Product Manager.",
        description: "For Fretbox Praveen focus on product roadmap. He is always busy exploring how to make things easy with Fretbox and cordinating with Developers."
    },
    {
        name: "Harikishan Yogi",
        img: "images/team/yogi.png",
        position: "Volunteer Developer-Applications.",
        description: "Harikishan joined the team very recently to help us with his development skills. He proved to be a very fast &amp; Valuable contributon in the product development."
    },
    {
        name: "Chetan Patel",
        img: "images/team/chetan_1.png",
        position: "Developer-Applications.",
        description: "Chetan is very fast learner and is passionate about UI development. He spent n number of sleepless nights to make Fretbox live."
    },
    {
        name: "Jigar",
        img: "images/team/jigar.png",
        position: "Developer-Applications.",
        description: "Jigar took responsibility of bringing Mobile apps into action, He alone focused on entire development of Cusomer &amp; Management app. We are very proud of his dedication."
    },
    {
        name: "Anmol Gupta",
        img: "images/team/anmol.png",
        position: "Developer - Artifical Intelligence.",
        description: "Anmol is a hidden gem in Fretbox team. He always comes with mindblowing Ideas related to Intelligence, worked with all dedication to explore technologies and bringing them into action."
    },
    {
        name: "Sanyam Gupta",
        img: "images/team/sanyam.png",
        position: "Developer - Applications.",
        description: "Sanyam is a Web Development and Machine Learning enthusiast. Also interested in Deep Learning. In web development, comfortable with Angularjs, Angular 2.0, React frameworks."
    },
    {
        name: "Sanjal Katiyar",
        img: "images/team/sanjal.png",
        position: "Developer - Applications.",
        description: "Sanjal is Passionate about Web Development and Machine Learning Interning as a UI/UX developer, working on various defects and missing functionalities."
    }

]

function openModel(name) {
    var findPerson = teamjson.find((value, index, array) => {
        return value.name == name;
    });
    $('#profileName').html(findPerson.name);
    $('#profileImg').attr("src", findPerson.img);
    $('#profilePosition').html(findPerson.position);
    $('#profileDescription').html(findPerson.description);
    $('#myModal').modal();
}