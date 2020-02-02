import React from "react";
import {GalleryItem} from './GalleryItem';
import {Loader} from '../Loader';

export class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
      isLoading: true,
      enableAutoRefresh: false,
      minComments: 0,
      // maxComments: 0
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

  updateMinComments = (e) => {
    this.setState({
      minComments: Number(e.target.value)
    })
  };

  getItemsByComments = (gallery, minComments) => {
    return gallery
      .filter(item => item.data.num_comments >= minComments)
      .sort((a, b) => b.data.num_comments - a.data.num_comments);
  };

  render() {
    const {gallery, isLoading, enableAutoRefresh, minComments} = this.state;
    const itemsByComments = this.getItemsByComments(gallery, minComments);

    return (
      <>
        <button type="button" onClick={this.updateAutoRefresh}>
          {enableAutoRefresh ? "Stop" : "Start"} auto-refresh
        </button>
        <p>Current filter: {minComments}</p>
        <input
          type="range"
          value={minComments}
          min={0}
          max={200}
          onChange={this.updateMinComments}
        />
        <div className='gallery'>
          {isLoading ? <Loader /> :
            itemsByComments.length > 0 ?
            <>
              {itemsByComments.map(item => {
                return (
                  <GalleryItem
                    key={item.data.id}
                    data={item.data}
                  />
                )
              })}
            </> : <p>No results found matghing your criteria</p>
            }
            </div>
            </>
            )
          }
          }