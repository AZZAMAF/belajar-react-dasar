import './HelloWorld.css'
export default function HelloWorld(){
    const props= {
        text: "hello Word"
    }
    return(
        <div>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>            
        </div>
    )
}

function HeaderHelloWorld({text = "Ups, Lupa kasih teks"}){
    
    return(
        <h1 className='title'
        >{text.toLocaleUpperCase()}</h1>
    )
}
function ParagraphHelloWorld(){
    const text = "Selamat Belajar React Js"
    const style ={
        color: "red", background: "black"
    }
    return(
        <p style={style}>{text.toLocaleLowerCase()}
        </p>
    )
}