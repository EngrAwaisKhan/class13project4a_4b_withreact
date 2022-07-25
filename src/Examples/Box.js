import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css';
import Typing from "./Typing";

function Box(){
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: [
            {transform: 'translate(0,0)'},
            {transform: 'translate(1150px,0)'},
            {transform: 'translate(1150px,580px)', background:'green'},
            {transform: 'translate(0,580px)', background:'orange'},
            {transform: 'translate(0,0px)', background:'blue'},
        ],
        animationOptions: {
        //   delay: 500, // Start with a 500ms delay
          duration: 20000, // Run for 1000ms
          iterations: 5000, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
        // onReady: ({ playState, animate, animation }) => {
        //   // Triggered when the animation is ready to play
        // },
        // onUpdate: ({ playState, animate, animation }) => {
        //   // Triggered when the animation enters the running state or changes state
        // },
        // onFinish: ({ playState, animate, animation }) => {
        //   // Triggered when the animation enters the finished state
        // },
        // More useful options...
      });
    
    
    return(
        <div>
            <div className="target" ref={ref}>
                <h2>
                    <Typing/>
                </h2>
            </div>
            <div className="btn-div">
                <button className="btn" onClick={() => getAnimation().pause()}>Pause</button>
                <button className="btn" onClick={() => getAnimation().play()}>Start</button>
            </div>
        </div>
    );
}
export default Box;