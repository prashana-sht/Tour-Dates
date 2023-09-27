import img from "./newyork.jpg"
import imgp from "./paris.jpg"
import imgs from "./san francisco.webp"
import Card from "./Card"

export default function Cards(){
    return(
        <div className="parent">
            <Card 
            img = {img}
            name = "New York"
            date = "Fri 27 Nov 2016 "
            para = "Praesent tincideunt sed tellus ur reesss" 
            buy = "Buy Tickets"
            />

            <Card 
            img = {imgp}
            name = "Paris"
            date = "Fri 27 Nov 2016 "
            para = "Praesent tincideunt sed tellus ur reesss" 
            buy = "Buy Tickets"
            />

            <Card 
            img = {imgs}
            name = "San Fransisco"
            date = "Fri 27 Nov 2016 "
            para = "Praesent tincideunt sed tellus ur reesss" 
            buy = "Buy Tickets"
            />
           
        </div>);
}




