import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'

const Search = () => (
    <form>
      <TextField
        id="search-bar"
        variant="standard"
        placeholder="Search..."
        size="small"
        style={{
          backgroundColor: "#FFFF",
          fontSize: "1.4rem",
          margin: "0.5rem 0",
          border: "solid black 0.1rem",
          borderRadius: 5,
          textAlign: "center"
      }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon 
            style={
              { 
                fill: "white", 
                fontSize: '1.6rem'
              }} />
      </IconButton>
    </form>
  );

  export default Search;