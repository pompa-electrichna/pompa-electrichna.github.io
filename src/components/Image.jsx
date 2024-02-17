import joinClassNames from '../helpers/joinClassNames';

import logo1 from '../img/Logo1.jpeg';
import background from '../img/Background.jpg';
import assemble from '../img/Assemble.jpg';
import complect from '../img/Complect.jpg';
import logo2 from '../img/Logo2.jpg';
import morshinska from '../img/Morshinska.jpg';
import sizes from '../img/Sizes.jpg';
import tube from '../img/Tube.jpg';
import battery from '../img/Battery.jpg';
import blueLine from '../img/BlueLine.png';
import order1 from '../img/Order1.png';
import order2 from '../img/Order2.png';
import order3 from '../img/Order3.png';
import order4 from '../img/Order4.png';

const images = {
    logo1,
    logo2,
    
    background,

    assemble,
    complect,
    sizes,
    tube,
    morshinska,
    battery,
    blueLine,
    order1,
    order2,
    order3,
    order4,
}

export const Image = ({
    name = 'logo1',
    className = ''
}) => {
    return (
        <img
            className={joinClassNames(
                className
            )}
            src={images[name]} 
            alt={name} 
        />
    )
}