import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import {
  contactSchema,
  type ContactFormData,
} from "../../validations/contact-form";
import { Typography } from "@mui/material";

export const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      topic: "",
      budget: "",
      description: "",
    },
  });

  const onSubmit = (data: ContactFormData) => console.log("Form Data:", data);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 3 }}>
      <Grid container spacing={3} direction={{ xs: "column", sm: "row" }}>
        {/*Name */}
        <Grid size={{ xs: 12, sm: 8, md: 6 }}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                required
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="standard"
              />
            )}
          />
        </Grid>

        {/* Company */}
        <Grid size={{ xs: 12, sm: 4, md: 6 }}>
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Company"
                fullWidth
                required
                error={!!errors.company}
                helperText={errors.company?.message}
                variant="standard"
              />
            )}
          />
        </Grid>

        {/* Company Email */}
        <Grid size={{ xs: 12, sm: 8, md: 6 }}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Company Email"
                fullWidth
                required
                error={!!errors.email}
                helperText={errors.email?.message}
                variant="standard"
              />
            )}
          />
        </Grid>

        {/* Phone */}
        <Grid size={{ xs: 12, sm: 4, md: 6 }}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone"
                fullWidth
                required
                error={!!errors.phone}
                helperText={errors.phone?.message}
                variant="standard"
              />
            )}
          />
        </Grid>

        {/* Topic */}
        <Grid size={{ xs: 12, sm: 8, md: 6 }}>
          <Controller
            name="topic"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Topic"
                fullWidth
                required
                error={!!errors.topic}
                helperText={errors.topic?.message}
                variant="standard"
              >
                <MenuItem value="sales">Sales</MenuItem>
                <MenuItem value="support">Technical Support</MenuItem>
                <MenuItem value="partnership">Partnership</MenuItem>
              </TextField>
            )}
          />
        </Grid>

        {/* Budget */}
        <Grid size={{ xs: 12, sm: 4, md: 6 }}>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Budget (min. €15k)"
                fullWidth
                required
                error={!!errors.budget}
                helperText={errors.budget?.message}
                variant="standard"
              >
                <MenuItem value="low">&lt; $15k</MenuItem>
                <MenuItem value="mid">$15k - $20k</MenuItem>
                <MenuItem value="high">$20k+</MenuItem>
              </TextField>
            )}
          />
        </Grid>

        {/* Describe Needs - Full Width */}
        <Grid size={12}>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Describe your needs in detail."
                multiline
                rows={4}
                fullWidth
                required
                error={!!errors.description}
                helperText={errors.description?.message}
                variant="standard"
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} direction={{ xs: "column", sm: "row" }} pt={3} alignItems="center">
        <Grid size={4}>
          <Button type="submit" variant="contained" size="large" fullWidth>
            Send
          </Button>
        </Grid>

        <Grid size={8}>
          <Typography variant="body2" color="text.secondary">
            By clicking Send, you agree to our <Box component="span" sx={{ textDecoration: 'underline' }}>Privacy Policy</Box> .
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
