import React from "react";
import {GalleryItem} from './GalleryItem';
import {Loader} from '../Loader';
import Filters from "../Filters/Filters";

export class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
      isLoading: true,
    }
  }

  getGalleryItems = () => {
    fetch("https://www.reddit.com/r/reactjs.json?limit=100")
      .then(response => {
        return response.json()
      })
      .then(({ data }) => {
        this.setState({
          gallery: data.children,
          isLoading: false
        });
      })
  };

  componentDidMount() {
    this.getGalleryItems();
  }

  render() {
    const {gallery, isLoading} = this.state;
    const itemsSortByComments = gallery.sort((a, b) => b.data.num_comments - a.data.num_comments);

    return (
      <>
        <div className='gallery'>
          {isLoading ? <Loader /> :
            <>
              {itemsSortByComments.map(item => {
                const gallery_item = item.data;
                return (
                  <GalleryItem
                    key={item.data.id}
                    data={item.data}
                  />
                )
              })}
            </>
          }
        </div>
      </>
    )
  }
}