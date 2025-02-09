class Card extends Component {
    render() {
        return (
            <div className='card ms-3' style={{width: "18rem"}}>
                <img src='../public/card2.jpg' className='card-img-top'/>
                <div className='card-body'>
                    <h5 className='card-title'>Natural Soap</h5>
                    <p className='card-text'>
                        Sabun homemade yang dibuat dari bahan-bahan yang berasal dari alam
                    </p>
                    <a href="#" className='btn btn-primary'>
                        baca Artikel
                    </a>
                </div>
            </div>
        );
    }
}
export default Card;