import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import Grid from "@mui/material/Grid";
import CancelIcon from "../Icons/cancel-icon";
import Divider from "@mui/material/Divider";

const Count = styled("div")(`
    width: 55px;
    font-size: 12px;
`);

interface MappedProductProps {
  image: string;
  price: number;
  id: number;
  title: string;
}

interface InteractiveListProps {
  products: MappedProductProps[];
  onDelete: (id:number) => void;
}

export default function InteractiveList({ products , onDelete}: InteractiveListProps) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <List dense={false}>
            {Object.entries(products).map(([key, value]: any) => {
              const title = Object.keys(value)[0];
              const image = value[title][0].image;
              const count = value[title].length;
              return (
                <>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete" onClick={()=>onDelete(value[title][0].id)}>
                        <CancelIcon />
                      </IconButton>
                    }
                  >
                    <Count>{count} X </Count>
                    <ListItemAvatar>
                      <Avatar variant="square" src={image}></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={title}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
