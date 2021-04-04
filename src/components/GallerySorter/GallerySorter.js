import React from 'react';
import './GallerySorter.css'
import image1 from '../../images/gallery/1.jpg'
import image2 from '../../images/gallery/2.jpg'
import image3 from '../../images/gallery/3.jpg'
import image4 from '../../images/gallery/4.jpg'
import image5 from '../../images/gallery/5.jpg'
import image6 from '../../images/gallery/6.jpg'
import image7 from '../../images/gallery/7.jpg'
import image8 from '../../images/gallery/8.jpg'
import image9 from '../../images/gallery/9.jpg'
import image10 from '../../images/gallery/10.jpg'

import ImageCard from '../ImageCard/ImageCard'
import { createStyles, FormControl, InputLabel, makeStyles, Select, Theme } from '@material-ui/core';

export default function GallerySorter() {

    const imageList = [
        {
            name: image1,
            event: 'Event 1',
            date: '11-10-1990'
        },
        {
            name: image2,
            event: 'Event 1',
            date: '10-10-1990'
        },
        {
            name: image3,
            event: 'Event 2',
            date: '10-10-1990'
        },
        {
            name: image4,
            event: 'Event 3',
            date: '10-10-1990'
        },
        {
          name: image5,
          event: 'Event 3',
          date: '10-10-1990'
        },
        {
          name: image6,
          event: 'Event 1',
          date: '10-10-1990'
        },
        {
          name: image7,
          event: 'Event 3',
          date: '10-10-1990'
        },
        {
          name: image8,
          event: 'Event 4',
          date: '10-10-1992'
        },
        {
          name: image9,
          event: 'Event 4',
          date: '10-10-1992'
        },
        {
          name: image10,
          event: 'Event 4',
          date: '10-10-1992'
        }
    ]


    const [type, setType] = React.useState('event');

    const listOfEvents = imageList.map(imageObj => imageObj.event).filter((value, index, self) => self.indexOf(value) === index)
    const listOfDates = imageList.map(imageObj => imageObj.date).filter((value, index, self) => self.indexOf(value) === index)


    const sortedByEventImages = () => {
      let obj = {}
      
      listOfEvents.forEach(eventName => 
        
        imageList.forEach(imageObj => {
          if(eventName === imageObj.event) {
            if(!obj[eventName]){
              obj[eventName] = []
            }
            obj[eventName].push(imageObj)

          }
        })
        )
      return obj
    }

    const sortedByDateImages = () => {
      let obj = {}
      
      listOfDates.forEach(eventDate => 
        
        imageList.forEach(imageObj => {
          if(eventDate === imageObj.date) {
            if(!obj[eventDate]){
              obj[eventDate] = []
            }
            obj[eventDate].push(imageObj)

          }
        })
        )
      return obj
    }

    const groupByEvent = listOfEvents.map(eventName => {
      let obj = sortedByEventImages()
      return <div >
              <div className="group-title-div">
                  <span className="group-title"> 
                      Event Name: {eventName}
                  </span>
              </div>

                {obj[eventName].map(imageObj => (<ImageCard path={imageObj.name}></ImageCard>))} 
              </div>
      
     } )

     const groupByDate = listOfDates.map(eventDate => {
      let obj = sortedByDateImages()
      return <div>
                <div className="group-title-div">
                  <span className="group-title"> 
                    Event Date: {eventDate} 
                  </span>
                </div>
                {obj[eventDate].map(imageObj => (<ImageCard path={imageObj.name}></ImageCard>))} 
              </div>
     } )

/*     const handleChange = (event) => {
      setType(event.target.value);
    }; */

    const handleChange = (event) => {
      setType(event.target.value);
    };

    const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const classes = useStyles();

        return (
            <div>
              
              <div className="sort-by-div">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-type-native-simple">Group By</InputLabel>
                <Select
                  native
                  value={type}
                  onChange={handleChange}
                  label="Sort By"
                  inputProps={{
                    name: 'type',
                    id: 'outlined-type-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="event">Event Name</option>
                  <option value="date">Event Date</option>
                </Select>
              </FormControl>
              </div>
            <div className="gallery-content">
              {type === "event" ? 
                <div>{groupByEvent}</div> 
                : 
                <div>{groupByDate}</div>}
            </div>
            <br/>
         
            </div>
        );

}






