import { useEffect } from "react";
import { useState } from "react";

const FAQItem = ({faq, index}) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        if(index == 0){
            setIsShow(true);
        }
    }, [])
    const handleClick = () => {
        setIsShow(!isShow);
    }
    return (
    <div className="faq-box">
        <div className="ques" onClick={handleClick} >
            <button className={isShow ? 'arrow' : ''}>></button>
            <div>{faq.question}</div>
        </div>
        <div className="ans">
            <div>{isShow && faq.answer}</div>
        </div>
    </div>
    )
}  

export default FAQItem;