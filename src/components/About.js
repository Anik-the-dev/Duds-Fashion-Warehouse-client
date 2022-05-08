import React from 'react';
import { Container } from 'react-bootstrap';
import duds from '../images/duds.png'
import dudsf from '../images/dudsfashion.png'

const About = () => {
    return (
        <Container>
            <div className=' my-5 d-sm-flex align-items-center justify-content-around gap-5 '>
                <img className='img-fluid' src={duds} alt='duds'></img>
                <div className='text-start mt-3'>
                    <h2>Duds Achievement</h2>
                    <p>Renowned fashion houses Duds Fashion Eye were the winners in the category Fashion and Boutique in the 7th edition of Best Brand Award 2015 on November 21.
                        Aarong and Anjan’s received the award as country’s first fashion and lifestyle brand and Cats Eye was appreciated for its western pattern ready- to- wear fashion.
                        Bangladesh Brand Forum (BBF), in partnership with world’s leading brand research company Millward Brown Bangladesh, arranged the event to honour the leading brands in Bangladesh in 35 categories based on a countrywide consumer research carried out by Millward Brown Bangladesh.
                        This event arranged this platform for best brands,  recognizing the success of business community of Bangladesh and portraying their achievements in brand building. The Best Brand Award event added the ‘Fashion and Boutique’ category this year for the first time.
                        A true pioneer in brand tracking since 1973, Millward Brown has conducted more than 18,000 brand tracking studies worldwide and has developed extensive databases and norms. It is the world’s largest brand tracking provider and currently has 1800 continuous tracking studies running, spanning 52 countries and 6 continents.
                    </p>
                </div>


            </div>
            <hr />


            <div className=' my-5 d-sm-flex align-items-center justify-content-around gap-5'>
                <img className='img-fluid w-25' src={dudsf} alt='duds'></img>
                <div className='text-start mt-3'>
                    <h2>About Duds Fashion</h2>
                    <p>DudsFashion is a Multi-purpose fashion brand for male
                        Duds Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.[1] The term implies a look defined by the fashion industry as that which is trending. Everything that is considered fashion is available and popularized by the fashion system (industry and media).

                        Due to increased mass-production of commodities and clothing at lower prices and global reach, sustainability has become an urgent issue among politicians, brands, and consumers.
                    </p>
                </div>


            </div>

        </Container>
    );
};

export default About;