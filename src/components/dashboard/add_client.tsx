import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

interface RightDrawerProps {
    isDrawerOpen: boolean;
    toggleDrawer: (open: boolean) => void;
}

const validationSchema = Yup.object({
    clientName: Yup.string().required("Client Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
});

export default function RightDrawer({ isDrawerOpen, toggleDrawer }: RightDrawerProps) {
    const formik = useFormik({
        initialValues: {
            clientName: "",
            clientType: "Company",
            contactperson: "",
            email: "",
            phoneNumber: "",
            secondaryEmail: "",
            secondaryPhone: "",
            clientId: ""
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Form Values", values);
            toggleDrawer(false);
        },
    });

    return (
        <Drawer anchor="right" open={isDrawerOpen} sx={{
            zIndex: 1300,
            "& .MuiModal-root": { margin: 0, padding: 0 },
            "& .MuiDrawer-paper": {
                width: 500,
                maxWidth: "100vw",

            }
        }}
            onClose={() => toggleDrawer(false)}>
            <Box sx={{ width: 500, p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    Add New Client
                    <IconButton onClick={() => toggleDrawer(false)} size="small">
                        <CloseIcon />
                    </IconButton>
                </Typography>
                <Divider sx={{ width: "100%", my: 1 }} />
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="body1" sx={{ mb: .5 }}>
                                Client Name <Typography component="span" sx={{ color: "red" }}>*</Typography>
                            </Typography>

                            <TextField
                                variant="outlined"
                                name="clientName"
                                value={formik.values.clientName}
                                onChange={formik.handleChange}
                                error={formik.touched.clientName && Boolean(formik.errors.clientName)}
                                helperText={formik.touched.clientName && formik.errors.clientName}
                                sx={{
                                    width: "452px",
                                    "& .MuiInputBase-root": {
                                        height: "32px"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "5px"
                                    }
                                }}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" sx={{ mb: .5 }}>
                                Client Id(Auto Generated)
                            </Typography>

                            <TextField
                                variant="outlined"
                                name="clientId"
                                value={formik.values.clientId}
                                onChange={formik.handleChange}
                                sx={{
                                    width: "452px",
                                    "& .MuiInputBase-root": {
                                        height: "32px"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "5px"
                                    }
                                }}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" sx={{ mb: .5 }}>
                                Contact Person
                            </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="contactperson"
                                value={formik.values.contactperson}
                                onChange={formik.handleChange}
                                sx={{
                                    "& .MuiInputBase-root": { height: "32px" },
                                    "& .MuiOutlinedInput-input": { padding: "5px" }
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="body1" sx={{ mb: .5 }}>
                                Client Type
                            </Typography>
                            <TextField
                                select
                                variant="outlined"
                                fullWidth
                                name="clientType"
                                value={formik.values.clientType}
                                onChange={formik.handleChange}
                                sx={{
                                    "& .MuiInputBase-root": { height: "32px" },
                                    "& .MuiOutlinedInput-input": { padding: "5px" }
                                }}
                            >
                                <MenuItem value="Company">Company</MenuItem>
                                <MenuItem value="Individual">Individual</MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="body1" sx={{ mb: .5 }}>
                                Contact Person
                            </Typography>

                            <TextField
                                variant="outlined"
                                name="contactperson"
                                value={formik.values.contactperson}
                                onChange={formik.handleChange}

                                sx={{
                                    width: "452px",
                                    "& .MuiInputBase-root": {
                                        height: "32px"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "5px"
                                    }
                                }}
                            />

                        </Grid>


                        <Grid item xs={12}>
                            <Divider sx={{ width: "100%", my: .5 }} />
                            <Typography variant="h6" sx={{ color: "black", textAlign: "left" }}>
                                Contact Details:
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>

                            <Typography variant="body1" sx={{ mb: .5 }}>
                                Email Address <Typography component="span" sx={{ color: "red" }}>*</Typography>
                            </Typography>
                            <TextField
                                variant="outlined"
                                name="email"

                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}

                                sx={{
                                    width: "220px",
                                    "& .MuiInputBase-root": {
                                        height: "32px"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "5px"
                                    }
                                }}
                            />


                        </Grid>
                        <Grid item xs={6}>

                            <Typography variant="body1" sx={{ mb: .5 }}>
                                Phone Number  <Typography component="span" sx={{ color: "red" }}>*</Typography>
                            </Typography>
                            <TextField
                                variant="outlined"
                                name="phoneNumber"

                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}

                                sx={{
                                    width: "220px",
                                    "& .MuiInputBase-root": {
                                        height: "32px"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "5px"
                                    }
                                }}
                            />


                        </Grid>


                        <Grid item xs={6}>

                            <Typography variant="body1" sx={{ mb: .5 }}>
                                Secondary Email  (Optional)
                            </Typography>
                            <TextField
                                variant="outlined"
                                name="secondaryEmail"

                                value={formik.values.secondaryEmail}
                                onChange={formik.handleChange}


                                sx={{
                                    width: "220px",
                                    "& .MuiInputBase-root": {
                                        height: "32px"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "5px"
                                    }
                                }}
                            />


                        </Grid>
                        <Grid item xs={6}>

                            <Typography variant="body1" sx={{ mb: .5 }}>
                                Secondary Phone (Optional)
                            </Typography>
                            <TextField
                                variant="outlined"
                                name="secondaryPhone"
                                value={formik.values.secondaryPhone}
                                onChange={formik.handleChange}

                                sx={{
                                    width: "220px",
                                    "& .MuiInputBase-root": {
                                        height: "32px"
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "5px"
                                    }
                                }}
                            />


                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                        <Button variant="outlined" onClick={() => toggleDrawer(false)}>
                            Close
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Add Client
                        </Button>
                    </Box>
                </form>
            </Box>
        </Drawer>
    );
}
