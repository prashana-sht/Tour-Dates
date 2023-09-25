import img from "./newyork.jpg"
import imgp from "./paris.jpg"
import imgs from "./san francisco.webp"

export default function Card(){
    return(
    <div className="row">
        <div className="column">
        <div className="card">
            <img src={img} alt="pic" width="400" height="410"/>
            <div className="year">
            <p>New York <br/> <br/>
                Fri 27 Nov 2016 <br/>
                Praesent tincideunt sed tellus ur reesss </p>
                <button> Buy Tickets </button>
            </div>
            </div>
        </div>

        <div className="column">
        <div className="card">
            <img src={imgp} alt="pic" width="400" height="410"/>
            <div className="year">
            <p>Paris <br/> <br/>
                Thu 20 Nov 2018 <br/>
                Praesent tincideunt sed tellus ur reesss </p>
                <button> Buy Tickets </button>
            </div>
        </div>
        </div>

        <div className="column">
        <div className="card">
            <img src={imgs} alt="pic" width="400" height="410"/>
            <div className="year">
            
            <p>San Francisco <br/> <br/>
                Fri 10 Nov 2016 <br/>
                Praesent tincideunt sed tellus ur reesss </p>
                <button> Buy Tickets </button>
            </div>
            </div>
        </div>
    </div>);
}
