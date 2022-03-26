

                <div>
                    {getRandomObject !== -1 ? <h1>{getRandomObject?.name}</h1> : 
                      <Card.Title>Selected Perfumes: {cart.length}</Card.Title>
                      <Card.Text><ul > {cart.map(product => <li key={product.id}>{product.name}</li>)}  </ul></Card.Text>
                     }
                </div>