export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    connectionString: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.fguqtla.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
  },
});
