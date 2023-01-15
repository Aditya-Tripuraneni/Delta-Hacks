import random
import sqlite3 
from companies import Company


# Connect to the database
conn = sqlite3.connect('database.db')

# Create a cursor
cursor = conn.cursor()


# Commit the changes
conn.commit()
conn.close()


"""
Name: send_data
Paramaters: company
Description: 
    Adds the company registered into the data base
"""
def send_data(company):
    connection = sqlite3.connect("database.db")
    cur = connection.cursor()

    cur.execute(f"INSERT INTO companyData VALUES (:name, :categoryType, :categoryLook, :profit, :ID)", 
    (company.name, company.current_field, company.field_desired, company.profit, company.id))
    #NOT FINISHED YET

    connection.commit()
    connection.close()


def generate_user_id():
    length = 8
    choices = "1234567890"
    id = ""
    while len(id) <= length: 
        id += random.choice(choices)
    return id

# Function returning a dictionary of the companies that match the field the user is interested in.
def company_match(target_field, companies_dict):
    companies_matched = {}
    for i in companies_dict:
        if target_field == companies_dict[i]:
            companies_matched[i] = companies_dict[i]
    
    return companies_matched
