import React from "react";
import GalleryItem from './GalleryItem';
import Loader from '../Loader';
import Filters from "../Filters/Filters";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
      isLoading: true,
      sortBy: 'comments_desc'
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

  onChangeSort = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const updatedGallery = [...this.state.gallery];
    this.setState(prevState => ({
      [name]: value
    }));
    if (this.state.sortBy === 'comments_desc') {
      console.log('Выбрано по убыванию!')
    } else {
      console.log('Выбрано по возрастанию!')
    }
  };

  render() {
    const {gallery, isLoading, sortBy} = this.state;

    return (
      <>
        <Filters sortBy={sortBy} onChangeSort={this.onChangeSort}/>
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
      </>
    )
  }
}