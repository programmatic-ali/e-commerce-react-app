import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'bags',
                imageUrl: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?cs=srgb&dl=pexels-andrew-neel-3178938.jpg&fm=jpg',
                id: 1
            },
            {
                title: 'shirts',
                imageUrl: 'https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?cs=srgb&dl=pexels-pixabay-264726.jpg&fm=jpg',
                id: 2

            },
            {
                title: 'wallets',
                imageUrl: 'https://images.pexels.com/photos/915917/pexels-photo-915917.jpeg?cs=srgb&dl=pexels-lukas-915917.jpg&fm=jpg',
                id: 3
            },
            {
                title: 'belts',
                imageUrl: 'https://images.pexels.com/photos/65280/belts-belt-skin-colors-65280.jpeg?cs=srgb&dl=pexels-pixabay-65280.jpg&fm=jpg',
                //size: 'large',
                id: 4
            },
            {
                title: 'ties',
                imageUrl: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?cs=srgb&dl=pexels-dom-j-45055.jpg&fm=jpg',
                //size: 'large',
                id: 5
            },
            {
                title: 'watches',
                imageUrl: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?cs=srgb&dl=pexels-jatin-anand-125779.jpg&fm=jpg',
                id: 6,
                size: 'large'

            },
            ]
        }
    }
    render() {
        return (
            <div className="menu-directory">
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;