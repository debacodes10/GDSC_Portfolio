import React from 'react'
import '../app/globals.css';
import Image from 'next/image';

const index = () => {
  return (
    
    <div class='container'>
      <div class='info_bar'>
        <div class='text-center heading_font'><h3>Welcome, Members of GDSC SRM Ramapuram</h3></div>
      </div>
      <div class='section banner'>
        <div class='m-auto flex'>
          <div class="info">
            <p class="text-lg font-bold">Debadyuti Mukherjee</p>
            <p class="text-sm font-medium"><b>Email:</b> mdebadyuti10@gmail.com</p>
            <p class="text-sm font-medium"><b>Github:</b> <a href="https://github.com/debacodes10">
              <u>www.github.com/debacodes10</u></a></p>
            <p class="text-sm font-medium"><b>Contact:</b> +91 62904 84287</p>
            <p class="text-sm font-medium"><b>Github - This website: </b>
            <a href='https://github.com/debacodes10/GDSC_Portfolio'><u>Link</u></a></p>
          </div>
        <Image src="/pfpedited.jpg" className='profile_img' height={100} width={100} alt='Profile Picture'/>
        </div>
      </div>
      <div class='section'>
        <div class='row_3'>
          <h1 class="education_detail_heading">Class 10</h1>
          <p class="text-sm font-medium text-center my-2 font-outline-1">St. Mary's School<br>
          </br>ICSE Board<br>
          </br>Percentage: 89.91</p>
        </div>
        <div class='row_3'>
        <h1 class="education_detail_heading">Class 12</h1>
        <p class="text-sm font-medium text-center my-2 font-outline-1">Haryana Vidya Mandir<br>
          </br>CBSE Board<br>
          </br>Percentage: 85.47</p>
        </div>
        <div class='row_3'>
        <h1 class="education_detail_heading">SRM University</h1>
        <p class="text-sm font-medium text-center my-2 font-outline-1">B.Tech CSE<br>
        </br>1st Year<br>
        </br>AIML Specialization</p>
        </div>
      </div>
      <div class='section'>
        <div class='row_4'>
          <h1 class="education_detail_heading">Python Development</h1>
          <p class="text-sm font-medium text-center my-2 font-outline-1">Experience: Basic <br>
          </br>Domain: basic ML,<br></br>Image Recognition.<br>
          </br>Projects: 3</p>
        </div>
        <div class='row_4 '>
        <h1 class="education_detail_heading">App Development</h1>
        <p class="text-sm font-medium text-center my-2 font-outline-1">Experience: Basic<br>
          </br>Environment: React-native, <br></br>Android Studio<br>
          </br>Projects: 1</p>
        </div>
        <div class='row_4'>
        <h1 class="education_detail_heading">Web Development</h1>
        <p class="text-sm font-medium text-center my-2 font-outline-1">Experience: Basic<br>
          </br>Environment: vanilla JS, <br></br>ReactJS, NextJS<br>
          </br>Projects: 2</p>
        </div>
        <div class='row_4'>
        <h1 class="education_detail_heading">C/C++ Enthusiast</h1>
        <p class="text-sm font-medium text-center my-2 font-outline-1">Currently Learning<br>
          </br>Projects: None<br>
          </br>Project idea: VPN <br></br>from scratch</p>
        </div>
      </div>
      <div class='section'>
        <div class='row_5'>
        <h1 class="education_detail_heading">Virtual Assistant</h1>
        <p class="text-sm font-medium text-center my-2 font-outline-1">
          Using Python and<br></br>keyword analysis<br></br>
          <a href='https://github.com/debacodes10/VirtualAssistant'><u>Github Link</u></a>
            </p>
        </div>
        <div class='row_5'>
        <h1 class="education_detail_heading">Face Detection</h1>
        <p class="text-sm font-medium text-center my-2 font-outline-1">
        Using Python and<br></br>openCV library<br></br>
          <a href='https://github.com/debacodes10/FaceDetection'><u>Github Link</u></a>
            </p>
        </div>
        <div class='row_5'>
        <h1 class="education_detail_heading">Keylogger</h1>
        <p class="text-sm font-medium text-center my-2 font-outline-1">
        Using Python and<br></br>pynput library<br></br>
          <a href='https://github.com/debacodes10/Keylogger'><u>Github Link</u></a>
            </p>
        </div>
        <div class='row_5'>
        <h1 class="education_detail_heading">To-Do List</h1>
        <p class="text-sm font-medium text-center my-2 font-outline-1">
        Using NextJS and<br></br>MongoDB<br></br>
          <a href='https://github.com/debacodes10/mytasks'><u>Github Link</u></a>
          </p>
        </div>
        <div class='row_5'>
        <h1 class="education_detail_heading">University Scheduler</h1>
        <p class="text-sm font-medium text-center my-2 font-outline-1">
        Using React-native and<br></br>Firebase<br></br>
          In Development!
          </p>
        </div>
      </div>
    </div>

    
  )
}

export default index