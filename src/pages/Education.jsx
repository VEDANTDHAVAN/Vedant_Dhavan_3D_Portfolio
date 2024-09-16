import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const Education = () => {
  return (
    <section className="max-container bg">
      <h1 className="head-text">My <span className="blue-gradient_text font-bold drop-shadow">Education</span> </h1>
    <div className="mt-12 flex">
     <VerticalTimeline>
      <VerticalTimelineElement className="flex-auto rounded-lg">
        <section className="contain-style bg-indigo-950">
       <h3 className="head-text text-gray-50">Oxford International School 
        <img className="w-60% h-60% justify-self-auto flex flex-auto" src="https://images.uniapply.com/uploads/college/image/500/4610/Oxford_International_School_3087_Building_1_3.jpg" />
        ICSE 
       </h3>
       <h4 className="font-poppins text-amber-200"> March 2011 - May 2021</h4>
       <h6 className="text-lime-300 font-serif">I have done my Schooling from Oxford International School,ICSE located in Kandivali (E), Mumbai, India.<br />
         Passed the 10th Grade with a score of 95.5%<br />
         Then chose to continue in Science stream.</h6>
      </section>
      </VerticalTimelineElement>
      <VerticalTimelineElement>
        <section className="contain-style">
       <h3 className="head-text text-purple-950">Mithibai College of Science and Arts 
        <img className="w-60% h-60% justify-self-auto flex flex-auto" src="https://e2pconsultancy.com/wp-content/uploads/2022/05/MITHIBAI-1.jpg" />
        SSC 
       </h3>
       <h4 className="font-poppins"> July 2021 - June 2023 </h4>
       <h6 className="text-pink-500 font-serif">Did my FYJC and SYJC from Mithibai College of Science and Arts,SSC located in Vile Parle (E),Mumbai, India. <br />
            Passed the 12th Grade with a score of 74.56% <br />
            Cleared the Common Enterence test for BE (MHTCET) with a score of 95.5 %ile. <br />
            Then chose to continue with Computer engineering. </h6>
      </section>
      </VerticalTimelineElement>
      <VerticalTimelineElement>
        <section className="contain-style">
       <h3 className="head-text text-teal-950">Vidyavrdhini's College of Engineering and Technology
        <img className="w-60% h-60% justify-self-auto flex flex-auto" src="https://tse4.mm.bing.net/th?id=OIP.hYrJ--B2eJYh9usF_uYVCAHaE8&pid=Api&P=0&h=180" />
       MU
       </h3>
       <h4 className="font-poppins"> Aug 2023 - 2027 </h4>
       <h6 className="text-yellow-500 font-serif">Currently pursuing a Bachelor's Degree in Computer Engineering from Vidyavardhini's College of Engineering and Technology,
         located in Vasai (E), Mumbai, India. </h6>
      </section>
      </VerticalTimelineElement>
     </VerticalTimeline>
    </div>
    <h1 className="head-text">My <span className="blue-gradient_text font-bold drop-shadow">Certificates</span> </h1>
    <div className="mt-12 flex">
     <VerticalTimeline>
      <VerticalTimelineElement className="flex-auto rounded-lg">
        <section className="contain-style">
       <h3 className="head-text text-amber-950">C++ Bootcamp
        <img className="w-60% h-60% justify-self-auto flex flex-auto" src="" />
       </h3>
       <h6 className="text-cyan-500 font-serif">The bootcamp was designed to provide a comprehensive understanding of C++ from basic syntax to advanced programming techniques.</h6>
      </section>
      </VerticalTimelineElement>
      <VerticalTimelineElement>
        <section className="contain-style">
       <h3 className="head-text text-purple-950">ChatGPT Bootcamp
        <img className="w-60% h-60% justify-self-auto flex flex-auto" src="" />
       </h3>
       <h6 className="text-orange-600 font-serif">Here’s a summary of topics covered in a ChatGPT bootcamp: <br />

         <u>Introduction:</u> Basics of GPT models, architecture, capabilities, and limitations. <br />
         <u>Getting Started:</u> Accessing and using ChatGPT, integration into applications. <br />
         <u> Prompt Engineering:</u> Crafting effective prompts, managing context, handling ambiguity. <br />
         Customization: Fine-tuning models, customizing behavior, managing output. <br />
         Ethical Considerations: Bias, privacy, appropriate use cases. <br />
         Practical Applications: Building chatbots, content generation, customer support. <br />
         Troubleshooting: Common issues, performance optimization, monitoring. <br />
         Future Directions: Upcoming advancements and next steps in AI and language models.</h6>
      </section>
      </VerticalTimelineElement>
      <VerticalTimelineElement>
        <section className="contain-style">
       <h3 className="head-text text-teal-950">Html and CSS Bootcamp
        <img className="w-60% h-60% justify-self-auto flex flex-auto" src="" />
       </h3>
       <h6 className="text-yellow-500 font-serif"> </h6>
      </section>
      </VerticalTimelineElement>
     </VerticalTimeline>
    </div>
    <CTA />
    </section>
  )
}

export default Education