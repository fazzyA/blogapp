import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, MenuItem, TextField } from "@mui/material";

function BasicGrid() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  const [title, setTitle] = React.useState("Harry Potter");
  const [description, setDescription] = React.useState("Harry Potter");
  const [author, setAuthor] = React.useState("JK Rolling");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('im in submit');
      //func add new blog into main state
  };

  const authors = [
    {
      value: "JK Rolling",
      label: "JK Rolling",
    },
    {
      value: "Willimson",
      label: "Willimson",
    },
    {
      value: "Rahat Jabeen",
      label: "Rahat Jabeen",
    },
    {
      value: "Umaira Ahmed",
      label: "Umaira Ahme",
    },
  ];


  return (
    <form onSubmit={handleSubmit}>
      <Box md={12}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Item>
              <TextField
                required
                id="title"
                value={title}
                label="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Item>
          </Grid>
          <Grid item md={12}>
            <Item>
              <TextField
                id="Description"
                label="Description"
                value={description}
                multiline
                maxRows={6}
                minRows={4}
                onChange={(e) => setDescription(e.target.value)}
              />{" "}
            </Item>
          </Grid>
          <Grid item md={12}>
            <Item>
              {" "}
              <TextField
                id="author"
                select
                label="Select"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                helperText="Please select author"
              >
                {authors.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Item>
          </Grid>
          <Grid item md={12}>
            <Item>
              <Button type="submit">Submit</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
export default BasicGrid;
