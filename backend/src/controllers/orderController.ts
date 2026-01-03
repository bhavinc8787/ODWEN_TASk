import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { orderNumber, customerName, customerEmail, items } = req.body;

    if (!orderNumber || !customerName || !items || items.length === 0) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    let totalAmount = 0;
    for (const item of items) {
      const product = await prisma.product.findUnique({
        where: { id: item.productId },
      });
      if (product) {
        totalAmount += product.price * item.quantity;
      }
    }

    const order = await prisma.order.create({
      data: {
        orderNumber,
        customerName,
        customerEmail,
        totalAmount,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, customerName, customerEmail } = req.body;

    const order = await prisma.order.update({
      where: { id },
      data: {
        status,
        customerName,
        customerEmail,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to update order" });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.order.delete({
      where: { id },
    });

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};
