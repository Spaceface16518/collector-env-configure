import sys
import argparse
env_file = open(".env", "r+") # XXX: needs to be able to find the env file

parser.add_argument("username", help="Enter your reddit username", type="str")
parser.add_argument("password", help="Enter your reddit password", type="str")
parser.add_argument("client_id", help="Enter your reddit app's client ID", type="str")
parser.add_argument("secret", help="Enter your client secret", type="str")
# IDEA: parser.add_argument("-a", "--add", help="Add another env variable", action="store_true")
args = parser.parse_args()
pass = str("CLIENT_PASS:", args.password)
secret = str("CLIENT_SECRET:", args.secret)
id = str("CLIENT_ID:", args.client_id)
usr = str("CLIENT_USER:", args.username)

vars = pass + "\n" + secret + "\n" + id + "\n" + usr

env_file.write(vars)
