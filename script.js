// document.getElementById("myForm").addEventListener("submit", function (event) {
//     //supaya tidak mengrefresh
//     event.preventDefault();
//     let forum_content = document.getElementById("forum-content").value;

//     let empty_forum = document.getElementsByClassName("forum-content");
//     let empty_forum_content = document.getElementById("empty-comment");

//     empty_forum[0].style = "display: none;";
//     empty_forum_content.style = "display: none;";

//     let new_forum = 
//     `<div class="new-forum-content mt-5 rounded-2 d-flex flex-column"       style="height: 394px; border: 1px solid #3E4B7C;">
//         <h1>Nicholas Indradjaja</h1>
//         <p>${forum_content}</p>
//     </div>`;

//     let algo_detail = document.getElementsByClassName("algo-detail")[0];
//     algo_detail.innerHTML += new_forum;

//     console.log(empty_forum[0]);
//     console.log(forum_content);
    
    
// });

function post() {
    let forum_content = document.getElementById("forum-content").value;
    
    if (forum_content == "") {
        let peringatan = document.getElementById("peringatan");
        peringatan.style = "display: inline; color:red;";
    } else {
        let peringatan = document.getElementById("peringatan");
        peringatan.style = "display: none";
        let empty_forum = document.getElementsByClassName("forum-content");
        let empty_forum_content = document.getElementById("empty-comment");

        empty_forum[0].style = "display: none;";
        empty_forum_content.style = "display: none;";

        let new_forum = 
        `<div class="new-forum-content mt-5 p-5 rounded-2 d-flex"       style="border: 1px solid #3E4B7C;">
            <img class="rounded-10 me-3" src="assets/profile.png">
            <div class="nama-forum d-flex justify-content-center flex-column">
                <h5>Nicholas Indradjaja</h5>
                <p style="margin-buttom: 0px;">${forum_content}</p>
            </div>
        </div>`;

        let algo_detail = document.getElementsByClassName("algo-detail")[0];
        algo_detail.innerHTML += new_forum;

        console.log(empty_forum[0]);
    }
}