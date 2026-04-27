import psycopg2

def connect_postgres():
    try:
        # Connection details
        conn = psycopg2.connect(
            dbname="mydb",
            user="postgres",
            password="mypassword",
            host="localhost",   # or your cloud DB host
            port="5432"
        )
        print("Connected to PostgreSQL successfully!")

        # Example query: fetch current date
        cur = conn.cursor()
        cur.execute("SELECT CURRENT_DATE;")
        result = cur.fetchone()
        print("Today's date from DB:", result[0])

        # Close connections
        cur.close()
        conn.close()

    except Exception as e:
        print("Error connecting to PostgreSQL:", e)

if __name__ == "__main__":
    connect_postgres()
