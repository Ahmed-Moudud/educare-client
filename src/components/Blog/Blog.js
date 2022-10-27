import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Blog = () => {
    return (
       <div className='w-50 mx-auto mt-3'> 
         <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is cors?</Accordion.Header>
          <Accordion.Body>
          CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why should we use Firebase?</Accordion.Header>
          <Accordion.Body>
          Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
          Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.<br></br>
          As a Google Cloud service, it also gives access to other Google products and features, like Google Drive and Sheets. For instance, one can import dummy data from Google Sheets and use it temporarily to serve apps.<br></br>
          <h3>Alternatives of Firebase</h3>
          1. OneLogin.
          2. JumpCloud.
          3. Microsoft Azure Active Derectory.
          4. CyberArk Identity 
          5. Auth0
          6. Ripping
          7. SucureAuth Identity Platform
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header> How does the private route work?</Accordion.Header>
          <Accordion.Body>
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>What is node? How does Node work?</Accordion.Header>
          <Accordion.Body>
          Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.<br></br>
          Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
       </div>
    );
};

export default Blog;