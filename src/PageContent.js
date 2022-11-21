import React, { useState } from 'react';
import { styled, Grid, Paper, Pagination, Stack, Typography, Button } from '@mui/material';
import jobs from './jobs';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: '100%'
}));

function PageContent() {
    const [page, setPage] = useState(1);
    const [itemOffset, setItemOffset] = useState(0);
    const currentItems = jobs.slice(itemOffset, itemOffset + 5);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        setItemOffset((value * 5) - 5);
    };

    return (
    <Grid container rowSpacing={4} columnSpacing={2} sx={{ marginTop: '2%', padding: '0 5%' }}>
        {currentItems.map((currentItem) => (
            <Grid key={currentItem.id} item xs={12} sm={6} md={4}>
                <Item>
                    <Typography sx={{textAlign: 'center'}}><h3>{currentItem.title}</h3></Typography>
                    <hr />
                    {
                        currentItem.skills.slice(0, 4).map((skill) => (
                            <Grid key={`${currentItem.id}-${skill}`} item xs={12} sx={{borderRadius: '10px', background: '#db0011', textAlign: 'center', padding: '10px', margin: '5px', flexGrow: '1', display: 'inline-block'}}>
                                <Typography sx={{fontSize: '10px', color: '#FFFFFF'}}>{skill}</Typography>
                            </Grid>
                        ))
                    }
                    <Typography sx={{textAlign: 'left', margin: '5px', display: 'block'}}><p>{currentItem.description}</p></Typography>
                    <Button variant='outlined' sx={{margin: '0 auto', display: 'block'}}>LEARN MORE</Button>
                </Item>
            </Grid>
        ))}
        <Grid item xs={12}>
            <Stack spacing={2}>
                <Pagination 
                    count={Math.floor(jobs.length / 5) + 1} 
                    color="primary"
                    page={page}
                    onChange={handleChange}
                    sx={{marginLeft: 'auto', marginRight: 'auto'}}
                />
            </Stack>
        </Grid>
    </Grid>
  )
}

export default PageContent