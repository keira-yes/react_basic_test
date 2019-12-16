import React from "react";
import GalleryItem from './GalleryItem';
import Loader from "../Loader";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
      isLoading: true
    }
  }

  getGalleryItems = () => {
    const link = 'https://www.reddit.com/r/reactjs.json?limit=100';
    fetch(link)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          gallery: data.data.children,
          isLoading: false
        });
        console.log(this.state.gallery)
      })
  };

  componentDidMount() {
    this.getGalleryItems();
  }

  render() {
    const {gallery, isLoading} = this.state;

    return (
      <div className='gallery'>
        {isLoading ? <Loader /> :
          <>
            {gallery.map(item => {
              const gallery_item = item.data;
              return (
                <GalleryItem
                  key={gallery_item.id}
                  image={gallery_item.thumbnail}
                  title={gallery_item.title}
                  commentsNumber={gallery_item.num_comments}
                  link={gallery_item.permalink}
                />
              )
            })}
          </>
        }
      </div>
    )
  }
}