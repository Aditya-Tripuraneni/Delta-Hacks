import random
import sqlite3 
from companies import Company


# Connect to the database
conn = sqlite3.connect('database.db')

# Create a cursor
cursor = conn.cursor()

# Create a table
cursor.execute("""CREATE TABLE companyData (
                    name text,
                    categoryType text,
                    categoryLook text,
                    profit REAL, 
                    quarterRep REAL)""")

# Insert data into the table

# Commit the changes
conn.commit()
conn.close()

def send_data(query, company):
    connection = sqlite3.connect("database.db")
    cur = connection.cursor()
    cur.execute(f"INSERT INTO {query} VALUES (:name)", {"": company.name})
    #cur.execute()

    #NOT FINISHED YET


    connection.commit()
    connection.close()

def generate_user_id():
    length = 8
    choices = "1234567890"
    id = ""
    while len(id) < length: 
        id += random.choice(choices)
    return id


