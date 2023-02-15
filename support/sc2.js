const user = sessionStorage.getItem("user");
const logged_in_user = document.querySelector("#voter-id");
logged_in_user.textContent = user;
var vote = document.getElementById("vote-btn");
document.getElementById('log-out-btn').addEventListener('click',function(){
      location.replace("../index.html");});
const firebaseConfig = {
      apiKey: "AIzaSyBEwJV2zhRCCGZgEo_39dC1dhr_Vgu45r4",
      authDomain: "voting-log.firebaseapp.com",
      databaseURL: "https://voting-log-default-rtdb.firebaseio.com",
      projectId: "voting-log",
      storageBucket: "voting-log.appspot.com",
      messagingSenderId: "84061766566",
      appId: "1:84061766566:web:0edc65e7c19340eca94567",
      measurementId: "G-5RNWGZDY34"
};
var temp;
firebase.initializeApp(firebaseConfig);
firebase.database().ref('voter/'+user+"/flag").on("value", function(snapshot){
      temp = snapshot.val();});
vote.addEventListener("click", function(){
            if(temp===0){
            var data={
                voter:user,flag:1
            }
            firebase.database().ref('voter').child(""+user).update(data);
            alert("Successfully Voted");
            location.reload();}
            else{alert("Already Voted. Cannot vote again.");
            location.reload();}
      // })   
});