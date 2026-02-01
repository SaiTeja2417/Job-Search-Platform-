import { Box, Grid, Typography } from "@mui/material"
import StyledCard from "../Components/StyledCard"
import { BookmarkAddOutlined, TaskOutlined, WorkOutlineOutlined } from "@mui/icons-material"
import { colors, remValues } from "../constants/Constants"
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Table } from '@mantine/core';
import { Link } from "react-router-dom";
import { Select } from '@mantine/core';


const Dashboard = () => {
  return (
    <>
      <Box p={5}>
        <Grid container spacing={3}>
          <Grid size={{ xl: 3, lg: 3, md: 4, sm: 6, xs: 12 }}>
            <StyledCard heading={"Applied Jobs"} content={"5"} icon={<WorkOutlineOutlined fontSize="large" sx={{ color: "dodgerblue" }} />} />
          </Grid>
          <Grid size={{ xl: 3, lg: 3, md: 4, sm: 6, xs: 12 }}>
            <StyledCard heading={"Shortlisted"} content={"0"} icon={<TaskOutlined fontSize="large" sx={{ color: "dodgerblue" }} />} />
          </Grid>
          <Grid size={{ xl: 3, lg: 3, md: 4, sm: 6, xs: 12 }}>
            <StyledCard heading={"Saved Jobs"} content={"6"} icon={<BookmarkAddOutlined fontSize="large" sx={{ color: "dodgerblue" }} />} />
          </Grid>
        </Grid>

        <Box mt={6}>
          <Grid container spacing={2}>
            <Grid size={{ xl: 6, lg: 6, md: 12, sm: 12, xs: 12 }}>
              <Typography sx={{ fontSize: remValues.rem20, fontWeight: 600 }}>
                Monthly Applications
              </Typography>

              <BarChart
                series={[
                  { data: [35, 44, 24, 34] },
                  { data: [51, 6, 49, 30] },

                ]}
                height={290}
                xAxis={[{ data: ['January', 'February', 'March', 'April'] }]}
              />
            </Grid>
            <Grid size={{ xl: 6, lg: 6, md: 12, sm: 12, xs: 12 }}>
              <Typography sx={{ fontSize: remValues.rem20, fontWeight: 600 }}>
                Category wise Applications
              </Typography>

              <PieChart sx={{ mt: 6 }}
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'Full stack developer ' },
                      { id: 1, value: 15, label: 'Data Analyst' },
                      { id: 2, value: 20, label: 'Front end developer' },
                    ],
                  },
                ]}
                width={200}
                height={200}
              />
            </Grid>
          </Grid>
        </Box>

        <Box mt={6}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
            <Typography sx={{ fontSize: remValues.rem20, fontWeight: 600 }}>
              Latest Openings for You
            </Typography>

            <Select styles={{
              input: {
                backgroundColor:colors.primarycolor
              },
            }}

            style={{
              marginTop:"10px"
              }}
              placeholder="Filter by"
              data={['Location', 'Role', 'Company']}
            />

          </Box>

          <Table.ScrollContainer minWidth={500} mt={25}>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Job Title</Table.Th>
                  <Table.Th>Company </Table.Th>
                  <Table.Th>Location</Table.Th>
                  <Table.Th>Posted Date</Table.Th>
                  <Table.Th>Apply Link</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>Front End Developer</Table.Td>
                  <Table.Td>Amazon</Table.Td>
                  <Table.Td>Hyderabad</Table.Td>
                  <Table.Td>25-April-2025</Table.Td>
                  <Table.Td>
                    <Link to="https://google.com">
                      Click here
                    </Link>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Data Scientist</Table.Td>
                  <Table.Td>Google</Table.Td>
                  <Table.Td>Mumbai</Table.Td>
                  <Table.Td>28-April-2025</Table.Td>
                  <Table.Td>
                    <Link to="https://google.com">
                      Click here
                    </Link>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Product Manager</Table.Td>
                  <Table.Td>ADP</Table.Td>
                  <Table.Td>Hyderabad</Table.Td>
                  <Table.Td>30-April-2025</Table.Td>
                  <Table.Td>
                    <Link to="https://google.com">
                      Click here
                    </Link>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>UI/UX Designer</Table.Td>
                  <Table.Td>Ozrit Ai Solutions</Table.Td>
                  <Table.Td>Hyderabad</Table.Td>
                  <Table.Td>1-May-2025</Table.Td>
                  <Table.Td>
                    <Link to="https://google.com">
                      Click here
                    </Link>
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard