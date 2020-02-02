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
      enableAutoRefresh: false
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

  updateAutoRefresh = () => {
    this.setState((prevState) => ({
        enableAutoRefresh: !prevState.enableAutoRefresh
      }),
      () => {
        if(this.state.enableAutoRefresh) {
          this.autorefresh = setInterval(this.getGalleryItems, 3000);
        } else {
          clearInterval(this.autorefresh);
        }
      }
    )
  };

  render() {
    const {gallery, isLoading, enableAutoRefresh} = this.state;
    const itemsSortByComments = gallery.sort((a, b) => b.data.num_comments - a.data.num_comments);

    return (
      <>
        <button type="button" onClick={this.updateAutoRefresh}>
          {enableAutoRefresh ? "Stop" : "Start"} auto-refresh
        </button>
        <div className='gallery'>
          {isLoading ? <Loader /> :
            <>
              {itemsSortByComments.map(item => {
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