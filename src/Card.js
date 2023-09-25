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
            <p>Fri 27 Nov 2016 <br/>
                Praesent tincideunt sed tellus ur reesss </p>
                <button> Buy Tickets </button>
            </div>
            </div>
        </div>

        <div className="column">
        <div className="card">
            <img src={imgp} alt="pic" width="400" height="410"/>
            <div className="year">
            <p>Fri 20 Nov 2018 <br/>
                Praesent tincideunt sed tellus ur reesss </p>
                <button> Buy Tickets </button>
            </div>
        </div>
        </div>

        <div className="column">
        <div className="card">
            <img src={imgs} alt="pic" width="400" height="410"/>
            <div className="year">
            <p>Fri 10 Nov 2016 <br/>
                Praesent tincideunt sed tellus ur reesss </p>
                <button> Buy Tickets </button>
            </div>
            </div>
        </div>
    </div>);
}
