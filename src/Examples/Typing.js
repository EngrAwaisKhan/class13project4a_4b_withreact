import Typewriter from  'typewriter-effect';

function Typing(){
    return(
        <Typewriter options={{loop: true}}
            onInit={(type) =>{
                type.typeString('HelloWorld!').pauseFor(2000).deleteAll().typeString('Awais Khan').pauseFor(2000).deleteAll().start();
            }}
        />
    );
}

export default Typing;