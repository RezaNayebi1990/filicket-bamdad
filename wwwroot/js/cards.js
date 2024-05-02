 
 // Cards Array
 var Foreigncards=[
    {
      URL:'wwwroot/image/equa.jpg',
      title : 'equalaizer',
      year:'2014',
      score:'7',
      genre:'اکشن',
    },
    {
        URL:'wwwroot/image/Oppenheimer.jpg',
        title : 'oppenhaimer',
        year:'2023',
        score:'8.8',
        genre:'بیوگرافی - درام',
      },
      {
        URL:'wwwroot/image/inception.jpg',
        title : 'inception',
        year:'2010',
        score:'8',
        genre:'علمی - تخیلی ',
      },
      
];

 
var Persiancards=[
  {
    URL:'wwwroot/image/6.5.jpg',
    title : 'متری شش و نیم',
    year:'1400',
    score:'7',
    genre:'اجتماعی  ',
  },
  {
      URL:'wwwroot/image/Fereshteh.jpg',
      title : 'گناه فرشته',
      year:'1402',
      score:'8.8',
      genre:'اجتماعی',
    },
    {
      URL:'wwwroot/image/fosil.jpg',
      title : 'فسیل',
      year:'1402',
      score:'8',
      genre:'کمدی',
    },
    
];

var Animationcards = [
  {
    URL: 'wwwroot/image/panda cover 2.jpg',
    title: 'پاندای کونگ فو کار',
    year: '2024',
    score: '8',
    genre: 'انیمیشن - کمدی  ',
  },
  {
    URL: 'wwwroot/image/soul.jpg.jpg',
    title: 'روح',
    year: '2020',
    score: '8.8',
    genre: 'فانتزی  -خانوادگی',
  },
  {
    URL: 'wwwroot/image/big hero 6.jpg',
    title: '6 ابر قهرمان',
    year: '2014',
    score: '8',
    genre: 'اکشن -کمدی',
  },
];



//Fill_Functions

function fillForeigncards() {
  
  
  var foreigncard ="";
  for (var i =0 ;i< Foreigncards.length; i++) {
    foreigncard = `
    <div class="col  ">
      <div class="card h-80">
        <a href="#"><img src="/wwwroot/image/equa.jpg" class="card-img-top" style="width: 320 px ; height: 480px; " alt="..."></a>
        <div class="card-body">
        <p><b>نام :</b> 
        <p><b>سال :</b> 
        <p><b>امتیاز :</b>
        <p> <b>ژانر : </b>
          </div>
        </div>
    </div> 
      <div class="col">
      <div class="card h-80">
        <a href="#"><img src="/wwwroot/image/the-nun-2018.jpg" class="card-img-top" style="width: 320 px ; height: 480px; " alt="..."></a>
        <div class="card-body">
          <p><b>نام :</b> 
          <p><b>سال :</b> 
          <p><b>امتیاز :</b> 
          <p> <b>ژانر : </b>
          </div>
        </div>
    </div> 
       <div class="col">
      <div class="card h-80">
        <a href="#"><img src="/wwwroot/image/oppenhaimer-cover.jpg" class="card-img-top" style="width: 320 px ; height: 480px; " alt="..."></a>
        <div class="card-body">
        <p><b>نام :</b> 
        <p><b>سال :</b> 
        <p><b>امتیاز :</b> 
        <p> <b>ژانر : </b> 
          </div>
        </div>
    </div>`
      
     }
document.getElementById("Foreigncards").innerHTML= (foreigncard);


}

function fillPersiancards() {
  
  
  var Persiancard ="";
  for (var i =0 ;i< Persiancards.length; i++) {
    Persiancard =` <div class="col  ">
    <div class="card h-80">
      <a href="#"><img src="/wwwroot/image/6.5.jpg" class="card-img-top" style="width: 320 px ; height: 480px; " alt="..."></a>
      <div class="card-body">
      <p><b>نام :</b> 
      <p><b>سال :</b> 
      <p><b>امتیاز :</b>
      <p> <b>ژانر : </b>
        </div>
      </div>
  </div> 
    <div class="col">
    <div class="card h-80">
      <a href="#"><img src="/wwwroot/image/Fereshteh.jpg" class="card-img-top" style="width: 320 px ; height: 480px; " alt="..."></a>
      <div class="card-body">
        <p><b>نام :</b> 
        <p><b>سال :</b> 
        <p><b>امتیاز :</b> 
        <p> <b>ژانر : </b>
        </div>
      </div>
  </div> 
     <div class="col">
    <div class="card h-80">
      <a href="#"><img src="/wwwroot/image/fosil.jpg" class="card-img-top" style="width: 320 px ; height: 480px; " alt="..."></a>
      <div class="card-body">
      <p><b>نام :</b> 
      <p><b>سال :</b> 
      <p><b>امتیاز :</b> 
      <p> <b>ژانر : </b> 
        </div>
      </div>
  </div> `
      
  }
document.getElementById("Persiancards").innerHTML= (Persiancard);


}

function fillAnimationcards() {
  
  
  var animationcard ="";
  for (var i =0 ;i< Animationcards.length; i++) {
    animationcard =`
    <div class="col  ">
      <div class="card h-80">
        <a href="#"><img src="/wwwroot/image/panda cover 2.jpg" class="card-img-top" style="width: 320 px ; height: 480px; " alt="..."></a>
        <div class="card-body">
        <p><b>نام :</b> 
        <p><b>سال :</b> 
        <p><b>امتیاز :</b>
        <p> <b>ژانر : </b>
          </div>
        </div>
    </div> 
      <div class="col">
      <div class="card h-80">
        <a href="#"><img src="/wwwroot/image/soul.jpg" class="card-img-top" style="width: 320 px ; height: 480px; " alt="..."></a>
        <div class="card-body">
          <p><b>نام :</b> 
          <p><b>سال :</b> 
          <p><b>امتیاز :</b> 
          <p> <b>ژانر : </b>
          </div>
        </div>
    </div> 
       <div class="col">
      <div class="card h-80">
        <a href="#"><img src="/wwwroot/image/big hero 6.jpg" class="card-img-top" style="width: 320 px ; height: 480px; " alt="..."></a>
        <div class="card-body">
        <p><b>نام :</b> 
        <p><b>سال :</b> 
        <p><b>امتیاز :</b> 
        <p> <b>ژانر : </b> 
          </div>
        </div>
    </div> 
  </div>
  `
      
  }
document.getElementById("Animationcards").innerHTML= (animationcard);


}

function loadcards()
{
    if (document.getElementById('selection').value=='animation')
    {
      fillAnimationcards();
    }
    if (document.getElementById('selection').value=='persian')
    {
      fillPersiancards();
    }
    if  (document.getElementById('selection').value=='foreign')
    {
      fillForeigncards();
    }


}

