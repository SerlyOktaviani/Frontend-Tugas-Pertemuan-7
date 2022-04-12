import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";


function AddMovieForm(props) {
  
  const { movies, setMovies } = props;
  
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [Genre, setGenre] = useState("");
  const [Poster, setPoster] = useState("");
 

  // Membuat state: isTitleError, isDateError
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);

  
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleGenre(e) {
    setGenre(e.target.value);
  } 

  function handlePoster(e) {
    setPoster(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "") {
      setIsTitleError(true);
    }

    else if (date === "") {
      setIsDateError(true);
    }
    
    else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: "Genre",
        Poster: "https://picsum.photos/300/400",
      };

      setMovies([...movies, movie]);

      setIsTitleError(false);
      setIsDateError(false);
      
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleTitle}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleDate}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="Genre" className={styles.form__label}>
                Genre
              </label>
              <select 
                id="Type"
                className={styles.form__input}
                type="Genre"
                name="Genre"
                 // Memberikan value input: Genre
                 value={Genre}
                 // Memberikan event onChange
                 onChange={handleGenre}
                >
                  <option value="Select">Select</option>
                  <option value="Drama">Drama</option>
                  <option value="Horror">Horror</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Romance">Romance</option>
                  <option value="Action">Action</option>                     
                </select>                  
            </div>

            <div className={styles.form__group}>
              <label htmlFor="https://picsum.photos/300/400" className={styles.form__label}>
                Poster
              </label>
              <input
                id="Poster"
                className={styles.form__input}
                type="Poster"
                name="Poster"
                // Memberikan value input: date
                value={Poster}
                // Memberikan event onChange
                onChange={handlePoster}
              />
            </div>
              
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
