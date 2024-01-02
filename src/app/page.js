import Box from "@mui/material/Box";

export default function HomePage() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        className="feliz"
        sx={{
          top: ["20%", "50%"],
        }}
      >
        We got an extra day this year, so let's accomplish something great!
      </Box>
      <Box className="ano_novo star">
        <Box>202</Box>
        <Box className="seis">3</Box>
        <Box className="sete">4</Box>
        <Box className="balao"></Box>
      </Box>
    </Box>
  );
}
