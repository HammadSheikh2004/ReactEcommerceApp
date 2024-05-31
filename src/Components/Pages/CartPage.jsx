import { Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import "../Helper/Cart.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartPage = () => {
  const [Quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity((pro_quantity) => pro_quantity + 1);
  }
  const decrement = () => {
    setQuantity((pro_quantity) => (pro_quantity > 0 ? pro_quantity - 1 : 0));
  }
  return (
    <Container sx={{ marginTop: "20px" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Id</TableCell>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Image</TableCell>
              <TableCell align='center'>Quantity</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">Bag</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">Img.1</TableCell>
              <TableCell align="center">
                <IconButton aria-label="decrease" onClick={decrement}>
                  <RemoveIcon />
                </IconButton>
                {Quantity}
                <IconButton aria-label="increase" onClick={increment}>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">Bag</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">Img.1</TableCell>
              <TableCell align="center">
                <IconButton aria-label="decrease" onClick={decrement}>
                  <RemoveIcon />
                </IconButton>
                {Quantity}
                <IconButton aria-label="increase" onClick={increment}>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">Bag</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">Img.1</TableCell>
              <TableCell align="center">
                <IconButton aria-label="decrease" onClick={decrement}>
                  <RemoveIcon />
                </IconButton>
                {Quantity}
                <IconButton aria-label="increase" onClick={increment}>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>

        </Table>

      </TableContainer>
    </Container>
  )
}

export default CartPage